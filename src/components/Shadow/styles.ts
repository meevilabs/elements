import styled from 'styled-components/native';

const shadowStyle = {
  shadowColor: '#212121',
  shadowOffset: { width: 1, height: 1 },
  shadowOpacity: 0.5,
  shadowRadius: 2,
  elevation: 2,
};

export const Wrapper = styled.View.attrs({
  style: shadowStyle,
})``;
