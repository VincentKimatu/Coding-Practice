import React from 'react';
import { CardOne, CardTwo, Content, ImageContainer } from './Card.style';
import {
  illustrationFlowingConversation,
  illustrationGrowTogether,
  illustrationYourUsers,
} from '../../assets/images/Images';

function Cards() {
  return (
    <>
      <CardOne>
        <Content>
          <h1>Grow Together</h1>
          <p>
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </Content>
        <ImageContainer>
          <img src={illustrationGrowTogether} alt='img of people talking' />
        </ImageContainer>
      </CardOne>

      <CardTwo>
        <Content>
          <h1>Flowing Conversations</h1>
          <p>
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </Content>
        <ImageContainer>
          <img
            src={illustrationFlowingConversation}
            alt='img of people talking'
          />
        </ImageContainer>
      </CardTwo>

      <CardOne>
        <Content>
          <h1>Your Users</h1>
          <p>
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </p>
        </Content>
        <ImageContainer>
          <img src={illustrationYourUsers} alt='img of people talking' />
        </ImageContainer>
      </CardOne>
    </>
  );
}

export default Cards;
