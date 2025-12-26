"use client";

import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { LanguageSwitcher } from "@/components/language-switcher";
import {
  HouseIcon,
  UserIcon,
  GearIcon,
  BriefcaseIcon,
} from "@phosphor-icons/react";
import Link from "next/link";

export function AppSidebar() {
  const { t } = useTranslation();
  const { setOpenMobile, isMobile, state } = useSidebar();
  const pathname = usePathname();

  const handleLinkClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  const menuItems = [
    {
      title: t("nav.home"),
      url: "/home",
      icon: HouseIcon,
    },
    {
      title: t("nav.works"),
      url: "/works",
      icon: BriefcaseIcon,
    },
  ];

  return (
    <Sidebar collapsible="icon" side="right">
      <SidebarHeader className="border-b border-border h-14 flex items-center px-4">
        <div className="flex items-center gap-2">
          <HouseIcon className="size-6 text-primary" weight="bold" />
          <span className="text-lg font-bold group-data-[collapsible=icon]:hidden">
            Taamis
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{t("nav.menu")}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link href={item.url} onClick={handleLinkClick}>
                        <item.icon
                          className="size-5"
                          weight={isActive ? "fill" : "regular"}
                        />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Placeholder for future sections */}
        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton disabled>
                  <UserIcon className="size-5" />
                  <span>Profile</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton disabled>
                  <GearIcon className="size-5" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border p-4">
        <LanguageSwitcher showText={state === "expanded"} />
      </SidebarFooter>
    </Sidebar>
  );
}
