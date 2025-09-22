import { Button, Clipboard } from '@chakra-ui/react';

import { type FC } from 'react';

type Props = {
  value: string;
};

export const CopyToClipboardButton: FC<Props> = ({ value }) => {
  return (
    <Clipboard.Root value={value}>
      <Clipboard.Trigger asChild>
        <Button
          size="xs"
          variant="subtle"
        >
          <Clipboard.Indicator />
          <Clipboard.CopyText />
          Ballot
        </Button>
      </Clipboard.Trigger>
    </Clipboard.Root>
  );
};
