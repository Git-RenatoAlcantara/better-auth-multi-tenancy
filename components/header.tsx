import { Logout } from "./logout";
import { ModeSwitcher } from "./mode-switcher";
import { getOrganizations } from "@/server/organizations";
import { OrganizationSwitcher } from "./organization-switcher";

export async function Header() {
  const organizations = await getOrganizations();

  return (
    <header className="absolute top-0 right-0 flex justify-between items-center p-4 w-full">
      <OrganizationSwitcher organizations={organizations} />
      <div className="flex items-center gap-2">
        <Logout />
        <ModeSwitcher />
      </div>
    </header>
  );
}