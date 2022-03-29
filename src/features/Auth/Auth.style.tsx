import styled from 'styled-components';
import Box from '@mui/material/Box';

export const Form = styled.form`
  padding: 20px;
`;

export const BoxContent = styled(Box)`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  h1 {
    text-align: center;
  }
`;

export const GoogleBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
