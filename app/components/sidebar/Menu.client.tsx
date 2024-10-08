import { useStore } from '@nanostores/react';
import { motion } from 'framer-motion';
import { memo, useState } from 'react';
import { Link } from '@remix-run/react';
import { chatStore } from '~/lib/stores/chat';
import { classNames } from '~/utils/classNames';
import { ThemeSwitch } from '~/components/ui/ThemeSwitch';
import { IconButton } from '~/components/ui/IconButton';

export const Menu = memo(() => {
  const { started } = useStore(chatStore);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <motion.aside
      initial={{ x: '-100%' }}
      animate={{ x: 0, width: isCollapsed ? '64px' : '256px' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={classNames(
        'fixed left-0 top-0 z-sidebar h-full bg-bolt-elements-background-depth-1 border-r border-bolt-elements-borderColor backdrop-blur-sm',
        isCollapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center p-4">
          {!isCollapsed && <span className="text-xl font-bold text-bolt-elements-textPrimary">Hephaestus</span>}
          <IconButton
            icon={isCollapsed ? 'i-ph:caret-right' : 'i-ph:caret-left'}
            onClick={toggleSidebar}
            className="text-bolt-elements-textPrimary"
          />
        </div>
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={classNames(
                    'flex items-center space-x-2 px-4 py-2 rounded-lg text-bolt-elements-textSecondary hover:text-bolt-elements-textPrimary hover:bg-bolt-elements-background-depth-2 transition-all duration-200',
                    { 'justify-center': isCollapsed }
                  )}
                >
                  <span className={classNames('text-xl', item.icon)} />
                  {!isCollapsed && <span>{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-bolt-elements-borderColor">
          <div className={classNames('flex items-center', isCollapsed ? 'justify-center' : 'justify-between')}>
            {!isCollapsed && <span className="text-bolt-elements-textSecondary">Theme</span>}
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </motion.aside>
  );
});

const menuItems = [
  { label: 'Home', href: '/', icon: 'i-ph:house-duotone' },
  { label: 'Projects', href: '/projects', icon: 'i-ph:folder-duotone' },
  { label: 'Settings', href: '/settings', icon: 'i-ph:gear-six-duotone' },
  { label: 'Help', href: '/help', icon: 'i-ph:question-duotone' },
];
