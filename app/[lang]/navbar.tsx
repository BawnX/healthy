'use client'
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  Button,
  Link
} from '@nextui-org/react'
import NextLink from 'next/link'
import { ThemeSwitch } from '@/app/commons/ui/theme-switch'
import {
  TwitterIcon,
  DiscordIcon,
  HeartFilledIcon,
  Logo
} from '@/app/commons/icons'
import { type Dictionaries } from '../commons/types/dictionaries'
import { useDictionaryStore } from '../commons/store/dictionaryStore'

export const Navbar = (): JSX.Element => {
  const { links }: Dictionaries = useDictionaryStore(state => state.dictionary)
  return (
    <NextUINavbar maxWidth="full" position="sticky" classNames={{
      item: [
        'flex',
        'relative',
        'h-full',
        'items-center',
        "data-[active=true]:after:content-['']",
        'data-[active=true]:after:absolute',
        'data-[active=true]:after:bottom-0',
        'data-[active=true]:after:left-0',
        'data-[active=true]:after:right-0',
        'data-[active=true]:after:h-[2px]',
        'data-[active=true]:after:rounded-[2px]',
        'data-[active=true]:after:bg-primary'
      ]
    }}>
      <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">Allian</p>
          </NextLink>
      </NavbarBrand>
      {/* <NavbarContent className="basis-1" justify="start">
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  'color: foreground',
                  'data-[active=true]:text-primary data-[active=true]:font-medium'
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
      </NavbarContent> */}

      <NavbarContent className="basis-1" justify="end">
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={links.twitter} aria-label="Twitter">
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal href={links.discord} aria-label="Discord">
            <DiscordIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={links.sponsor}
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Sponsor
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent> */}

      {/* <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color=
                {
                  index === 2
                    ? 'primary'
                    : index === siteConfig.navMenuItems.length - 1
                      ? 'danger'
                      : 'foreground'
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu> */}
    </NextUINavbar>
  )
}
