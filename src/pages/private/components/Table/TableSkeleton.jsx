import Skeleton from "@/components/Skeleton/Skeleton";

const TableSkeleton = () => (
  <table className="mt-7 w-full min-w-140 en:text-left fa:text-right">
    <thead className="border-b-2 border-[#56577A]">
      <tr>
        <th className="py-4">
          <Skeleton className="block w-22.5" />
        </th>
        <th className="py-4">
          <Skeleton className="block w-20" />
        </th>
        <th className="py-4">
          <Skeleton className="block w-27.5" />
        </th>
      </tr>
    </thead>

    <tbody className="*:border-b-2 *:border-[#56577A] *:last:border-b-0">
      {Array.from({ length: 6 }, (_, i) => (
        <tr key={i} className="*:py-5">
          <td>
            <Skeleton className="block w-45" />
          </td>

          <td>
            <Skeleton className="block w-25" />
          </td>

          <td>
            <Skeleton className="block w-32.5" />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TableSkeleton;
