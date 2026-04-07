import { CopyButton, Tooltip, Text } from '@mantine/core';

interface CopyEmailProps {
  email: string;
  className?: string;
  size?: string;
  color?: string;
}

export function CopyEmail({ email, className, size = 'sm', color }: CopyEmailProps) {
  return (
    <CopyButton value={email} timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied!' : 'Click to copy'} withArrow position="top">
          <Text
            component="span"
            size={size}
            className={className}
            onClick={copy}
            style={{ cursor: 'pointer', ...(color ? { color } : {}) }}
          >
            {copied ? 'Copied!' : email}
          </Text>
        </Tooltip>
      )}
    </CopyButton>
  );
}
