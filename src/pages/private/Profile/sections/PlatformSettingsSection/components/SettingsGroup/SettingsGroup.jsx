import { useTranslation } from "react-i18next";

import CheckboxInput from "@/components/CheckboxInput/CheckboxInput";
import { useUpdateAdmin } from "@/services/features/admin/hooks/useAdmin/useAdmin";

const SettingsGroup = ({ data, title, settingsSection, isPending }) => {
  const { updateAdmin } = useUpdateAdmin();

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
      id: data.id,
      data: updatedSettings,
    });
  };

  const { t } = useTranslation();

  return (
    <div className="flex-start flex-col leading-0">
      <span className="font-VazirMedium text-xs text-gray-400">{t(title)}</span>

      <div className="mt-1.5 flex-start flex-col space-y-3">
        {data.settings[settingsSection].map((setting) => (
          <CheckboxInput
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
