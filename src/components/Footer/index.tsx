import React from 'react'

import * as S from './styles'
import { FooterProps } from 'types/api'

const Footer = ({ text }: FooterProps) => (
  <S.Wrapper dangerouslySetInnerHTML={{ __html: text }} />
)

export default Footer
