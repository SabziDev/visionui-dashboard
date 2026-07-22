import { useTranslation } from "react-i18next";

import RadioBtn from "@/pages/components/RadioBtn/RadioBtn";
import { useAdminMutation } from "@/services/hooks/useAdmin/useAdmin";

const SettingsGroup = ({ data, title, settingsSection, isPending }) => {
  const { updateAdmin } = useAdminMutation();

  const updateSetting = (e, setting) => {
    const updatedSettings = {
      ...data.settings,
      [settingsSection]: data.settings[settingsSection].map((item) =>
        item.key === setting.key
          ? { ...item, isActive: e.target.checked }
          : item,
      ),
    };

    updateAdmin({
      data: updatedSettings,
      settingKey: setting.key,
      adminId: data.id,
    });
  };

  const { t } = useTranslation();

  return (
    <div className="flex-start flex-col leading-0">
      <span className="font-VazirMedium text-xs text-gray-400">{t(title)}</span>

      <div className="mt-1.5 flex-start flex-col space-y-3">
        {data.settings[settingsSection].map((setting) => (
          <RadioBtn
            key={setting.key}
            id={setting.key}
            title={setting.title}
            checked={setting.isActive}
            isPending={isPending}
            onChange={(e) => updateSetting(e, setting)}
          />
        ))}
      </div>
    </div>
  );
};

export default SettingsGroup;
