import styled, { css } from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      #list {
        ${() =>
          window.location.href === 'http://localhost:3000/' &&
          css`
            opacity: 1;
            font-weight: 600;
          `}
      }

      #import {
        ${() =>
          window.location.href === 'http://localhost:3000/import' &&
          css`
            opacity: 1;
            font-weight: 600;
          `}
      }
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        font-family: Poppins;
        font-style: normal;
        opacity: 0.8;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          padding-bottom: 10px;
          border-bottom: 2px solid #ff872c;
        }
      }
    }
  }
`;
