import Text from 'src/components/elements/Text/Text';
import Modal from 'src/components/elements/Modal/Modal';
import Flex from 'src/components/elements/Flex/Flex';

import {
  PrintButton,
  EmailButton,
  TwitterButton,
  FacebookButton,
} from './SocialButtons';

export default function SocialButtonsModal({ share, setShare, hit }) {
  if (!hit) return null;

  return (
    <Modal open={share} handleClose={() => setShare(false)}>
      <Text variant="h2" color="primary" textAlign="center" marginBottom="24px">
        Share Listing
      </Text>

      <Flex flexDirection="column">
        <PrintButton onClick={process.browser ? window.print : null}>
          Print this Listing
        </PrintButton>

        <EmailButton
          href={`mailto:?subject=${hit.title}&body=${
            process.browser ? window.location.href : ''
          }`}
        >
          Share with Email
        </EmailButton>

        <FacebookButton
          target="_blank"
          rel="noreferrer"
          href={`https://www.facebook.com/sharer/sharer.php?u=${
            process.browser ? window.location.href : ''
          }`}
        >
          Share on Facebook
        </FacebookButton>

        <TwitterButton
          target="_blank"
          rel="noreferrer"
          href={`https://twitter.com/share?text=${hit.title}&url=${
            process.browser ? window.location.href : ''
          }`}
        >
          Share on Twitter
        </TwitterButton>
      </Flex>
    </Modal>
  );
}
