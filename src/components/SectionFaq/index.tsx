import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { SectionFaqProps } from 'types/api'

const SectionFaq = ({ title, questions, extraQuestion }: SectionFaqProps) => (
  <S.Wrapper>
    <S.Content>
      <Container>
        <Heading>{title}</Heading>

        <S.Questions>
          {questions.map((faq) => (
            <S.Question key={faq.id}>
              <Heading lineBottom>{faq.question}</Heading>
              <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </S.Question>
          ))}
        </S.Questions>

        <S.ExtraQuestion>
          <Heading lineBottom>{extraQuestion.question}</Heading>
          <div dangerouslySetInnerHTML={{ __html: extraQuestion.answer }} />
        </S.ExtraQuestion>
      </Container>
    </S.Content>
  </S.Wrapper>
)

export default SectionFaq
