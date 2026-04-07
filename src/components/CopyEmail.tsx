import { CopyButton, Tooltip, Text } from '@mantine/core';
import { IconCheck, IconCopy } from '@tabler/icons-react';

interface CopyEmailProps {
  email: string;
  className?: string;
  size?: string;
}

export function CopyEmail({ email, className, size = 'sm' }: CopyEmailProps) {
  return (
    <CopyButton value={email} timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied!' : 'Click to copy'} withArrow position="top">
          <Text
            component="span"
            size={size}
            className={className}
            onClick={copy}
            style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 4 }}
          >
            {email}
            {copied
              ? <IconCheck size={13} style={{ flexShrink: 0 }} />
              : <IconCopy size={13} style={{ flexShrink: 0, opacity: 0.5 }} />}
          </Text>
        </Tooltip>
      )}
    </CopyButton>
  );
}
