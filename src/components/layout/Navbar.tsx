import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Group, Text, Box, Burger, Drawer, Stack, TextInput, Paper } from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import classes from './Navbar.module.css';

const links = [
  { to: '/',        label: 'Home'       },
  { to: '/service', label: 'Service'    },
  { to: '/join',    label: 'Sisterhood' },
  { to: '/team',    label: 'Leadership' },
  { to: '/contact', label: 'Contact'    },
];

const searchIndex = [
  { path: '/',        label: 'Home',       keywords: ['home', 'about', 'welcome', 'omega phi alpha', 'nu chapter', 'pillars', 'testimonials'] },
  { path: '/service', label: 'Service',    keywords: ['service', 'volunteer', 'mental health', 'community', 'hours', 'project', 'families', 'service director'] },
  { path: '/join',    label: 'Sisterhood', keywords: ['join', 'rush', 'recruitment', 'sisterhood', 'membership', 'bid day', 'rose night', 'requirements'] },
  { path: '/team',    label: 'Leadership', keywords: ['leadership', 'team', 'officers', 'president', 'exec', 'board', 'treasurer', 'secretary'] },
  { path: '/contact', label: 'Contact',    keywords: ['contact', 'email', 'message', 'reach out', 'location', 'meeting', 'instagram'] },
];

function NavSearch() {
  const [query, setQuery] = useState('');
  const [open, setOpen]   = useState(false);
  const navigate          = useNavigate();
  const wrapRef           = useRef<HTMLDivElement>(null);

  const results = query.trim().length > 0
    ? searchIndex.filter(p =>
        p.label.toLowerCase().includes(query.toLowerCase()) ||
        p.keywords.some(k => k.includes(query.toLowerCase()))
      )
    : [];

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const go = (path: string) => {
    navigate(path);
    setQuery('');
    setOpen(false);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && results.length > 0) go(results[0].path);
    if (e.key === 'Escape') { setOpen(false); setQuery(''); }
  };

  return (
    <Box ref={wrapRef} style={{ position: 'relative' }}>
      <TextInput
        placeholder="Search…"
        value={query}
        onChange={e => { setQuery(e.currentTarget.value); setOpen(true); }}
        onKeyDown={handleKey}
        onFocus={() => setOpen(true)}
        leftSection={<IconSearch size={14} color="rgba(255,255,255,0.6)" />}
        size="xs"
        radius="xl"
        classNames={{ input: classes.searchInput }}
        style={{ width: 180 }}
      />
      {open && results.length > 0 && (
        <Paper
          radius="md"
          shadow="md"
          style={{ position: 'absolute', top: 'calc(100% + 8px)', right: 0, width: 200, zIndex: 1000, overflow: 'hidden' }}
        >
          {results.map(r => (
            <Box key={r.path} className={classes.searchResult} onClick={() => go(r.path)}>
              <Text size="sm" fw={500} style={{ color: '#1a2744' }}>{r.label}</Text>
            </Box>
          ))}
        </Paper>
      )}
    </Box>
  );
}

export function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [scroll] = useWindowScroll();

  return (
    <>
      <Box component="nav" className={`${classes.nav} ${scroll.y > 20 ? classes.scrolled : ''}`} h="100%">
        <Group h="100%" px="xl" justify="space-between" maw={1200} mx="auto" w="100%">

          {/* Brand */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Group gap="sm">
              <Box className={classes.logoMark}>ΩΦΑ</Box>
              <Box visibleFrom="xs">
                <Text className={classes.brandTitle}>Omega Phi Alpha</Text>
                <Text className={classes.brandSub}>Nu Chapter</Text>
              </Box>
            </Group>
          </Link>

          {/* Desktop links + search */}
          <Group gap="xs" visibleFrom="sm">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => `${classes.link} ${isActive ? classes.active : ''}`}
              >
                {l.label}
              </NavLink>
            ))}
            <NavSearch />
          </Group>

          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" color="white" aria-label="Toggle navigation" />
        </Group>
      </Box>

      <Drawer
        opened={opened}
        onClose={close}
        title={<Text fw={700} size="lg" style={{ fontFamily: 'Playfair Display, serif', color: '#1a2744' }}>Omega Phi Alpha</Text>}
        size="xs"
        position="right"
      >
        <Stack gap="xs">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={close}
              className={({ isActive }) => `${classes.mobileLink} ${isActive ? classes.mobileLinkActive : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </Stack>
      </Drawer>
    </>
  );
}
