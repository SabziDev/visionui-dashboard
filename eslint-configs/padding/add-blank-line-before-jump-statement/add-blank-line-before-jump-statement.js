/* eslint-disable max-lines-per-function */
/* eslint-disable unicorn/consistent-function-scoping */

const addBlankLineBeforeJumpStatement = {
  rules: {
    "add-blank-line-before-jump-statement": {
      meta: {
        type: "layout",
        fixable: "code",
        messages: {
          missingBlankLine: "Expected a blank line before statement",
        },
        schema: [],
      },

      create(context) {
        const { sourceCode = context.getSourceCode() } = context;

        const hasPreviousStatement = (node, parentBody) => {
          const index = parentBody.indexOf(node);

          if (index <= 0) return false;

          const { type: prevType } = parentBody[index - 1];

          return (
            prevType !== "ReturnStatement" && prevType !== "BreakStatement"
          );
        };

        const isOnlyStatementInBlock = (node) => {
          const { parent } = node;

          if (parent?.type === "BlockStatement") {
            const { body: statements } = parent;

            if (statements.length === 1 && statements[0] === node) {
              return true;
            }

            if (
              statements.length === 1 &&
              (statements[0].type === "ReturnStatement" ||
                statements[0].type === "BreakStatement")
            ) {
              return true;
            }
          }

          if (
            parent?.type === "ArrowFunctionExpression" &&
            parent.body === node
          ) {
            const { body: arrowBody } = parent;

            return (
              (arrowBody.type === "ReturnStatement" ||
                arrowBody.type === "BreakStatement") &&
              arrowBody === node
            );
          }

          return false;
        };

        const hasBlankLineBefore = (node) => {
          const prevToken = sourceCode.getTokenBefore(node, {
            includeComments: true,
          });

          if (!prevToken) return true;

          const { end: prevEnd } = prevToken.loc;
          const { start: currentStart } = node.loc;

          return currentStart.line - prevEnd.line > 1;
        };

        const getLastNonCommentTokenBefore = (token) => {
          let prevToken = sourceCode.getTokenBefore(token, {
            includeComments: true,
          });

          while (
            prevToken &&
            (prevToken.type === "Line" || prevToken.type === "Block")
          ) {
            prevToken = sourceCode.getTokenBefore(prevToken, {
              includeComments: true,
            });
          }

          return prevToken;
        };

        const needsBlankLineBeforeComment = (commentToken) => {
          const lastNonComment = getLastNonCommentTokenBefore(commentToken);

          if (!lastNonComment) return false;

          const { end: lastEnd } = lastNonComment.loc;
          const { start: commentStart } = commentToken.loc;

          return commentStart.line - lastEnd.line === 1;
        };

        const findParentBlock = (node) => {
          let { parent: currentParent } = node;

          while (currentParent) {
            const { type } = currentParent;

            if (type === "BlockStatement" || type === "Program") {
              return {
                parentBody: currentParent.body,
              };
            }

            currentParent = currentParent.parent;
          }

          return {
            parentBody: null,
          };
        };

        const checkStatement = (node) => {
          if (isOnlyStatementInBlock(node)) {
            return;
          }

          const { parentBody } = findParentBlock(node);

          if (!parentBody) return;

          if (!hasPreviousStatement(node, parentBody)) {
            return;
          }

          const prevToken = sourceCode.getTokenBefore(node, {
            includeComments: true,
          });

          const hasCommentBefore =
            prevToken &&
            (prevToken.type === "Line" || prevToken.type === "Block");

          if (hasCommentBefore) {
            if (needsBlankLineBeforeComment(prevToken)) {
              context.report({
                node,
                messageId: "missingBlankLine",
                fix: (fixer) => fixer.insertTextBefore(prevToken, "\n"),
              });
            }

            return;
          }

          if (hasBlankLineBefore(node)) {
            return;
          }

          const nodeIndex = parentBody.indexOf(node);

          const { type: prevType } = parentBody[nodeIndex - 1] || {};

          if (prevType === "ReturnStatement" || prevType === "BreakStatement") {
            return;
          }

          context.report({
            node,
            messageId: "missingBlankLine",
            fix: (fixer) => fixer.insertTextBefore(node, "\n"),
          });
        };

        return {
          ReturnStatement: checkStatement,
          BreakStatement: checkStatement,
        };
      },
    },
  },
};

export default addBlankLineBeforeJumpStatement;
