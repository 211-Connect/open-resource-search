import React, { useEffect } from 'react';
import FocusTrap from 'focus-trap-react';
import { CloseOutlined } from '@material-ui/icons';
import Button from 'src/components/elements/Button/Button';
import ClientOnlyPortal from 'src/components/modules/ClientOnlyPortal/ClientOnlyPortal';
import styled from 'styled-components';
import If from '@element/If/If';

const StyledModal = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 900;

  @media print {
    display: none;
  }
`;

export const Modal = ({ children, open, handleClose }) => {
  useEffect(() => {
    function clickListener(e) {
      const innerModal = e.target.closest('#innerModal');
      const outerModal = e.target.closest('#modal');

      if (innerModal == null && outerModal != null) {
        handleClose();
      }
    }

    if (open) {
      document.addEventListener('click', clickListener);
    }

    return () => document.removeEventListener('click', clickListener);
  }, [open, handleClose]);

  return (
    <If value={open}>
      <ClientOnlyPortal selector="#modal">
        <StyledModal>
          <FocusTrap focusTrapOptions={{ allowOutsideClick: () => true }}>
            <div
              id="innerModal"
              style={{
                background: '#ffffff',
                borderRadius: 6,
                maxHeight: '100%',
                maxWidth: 360,
                overflow: 'auto',
                padding: 16,
                position: 'relative',
                width: '100%',
              }}
            >
              <Button
                onClick={handleClose}
                color="primary"
                style={{
                  borderRadius: '100%',
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  minWidth: 0,
                  fontSize: 24,
                  margin: 0,
                  width: 30,
                  height: 30,
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CloseOutlined />
              </Button>

              {children}
            </div>
          </FocusTrap>
        </StyledModal>
      </ClientOnlyPortal>
    </If>
  );
};

export default Modal;
