import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from 'src/components/elements/Button/Button';
import Flex from 'src/components/elements/Flex/Flex';
import SessionStorage from '@service/sessionStorage';

export default function Actions({ setShare }) {
  const router = useRouter();
  const [buttonType, setButtonType] = useState<'BACK' | 'HOME' | null>(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const prevPath = SessionStorage.get('prevPath');
    const currentPath = SessionStorage.get('currentPath');

    if (prevPath != null && prevPath.length > 0 && prevPath !== currentPath) {
      setButtonType('BACK');
      setShowButton(true);
    } else {
      setButtonType('HOME');
      setShowButton(true);
    }
  }, []);

  function goBack() {
    router.back();
  }

  function goHome() {
    router.push('/');
  }

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      marginBottom="16px"
    >
      {showButton && buttonType === 'BACK' && (
        <Button onClick={goBack} noPrint color="primary">
          Go Back
        </Button>
      )}

      {showButton && buttonType === 'HOME' && (
        <Button onClick={goHome} noPrint color="primary">
          Back to Search
        </Button>
      )}

      <Button noPrint color="primary" onClick={() => setShare(true)}>
        Print &amp; Share
      </Button>
    </Flex>
  );
}
