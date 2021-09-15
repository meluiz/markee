import styled, { css } from 'styled-components'

export const Wrapper = styled.aside`${({ theme }) => css`
  width: 332px;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 0;
  position: relative;
  background-color: ${theme.colors.black};
`}`

export const Header = styled.header`
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 36px;
`

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const Logo = styled.figure`
  min-height: 0;
  position: relative;

  img {
    max-width: 100%;
  }
`

export const Navigation = styled.nav`
  display: flex;
  padding: 8px 32px;
  flex-direction: column;
  position: relative;
`

export const NavigationHeader = styled.div`${({ theme }) => css`
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  padding: 0 14px;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 4px;
    position: absolute;
    left: 0; top: 50%;
    border-radius: 999px;
    background-color: ${theme.colors.primary};
  }
`}`

export const NavigationTitle = styled.div`${({ theme }) => css`
  color: ${theme.colors.white};
  font-size: 1.6rem;
  z-index: 1;
  padding: 0 6px;
  background-color: ${theme.colors.black};
`}`

export const NavigationActions = styled.div`
  min-height: 0;
  padding: 24px 0;
  position: relative;
`
