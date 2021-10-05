import styled from 'styled-components';

export default function HighlightText(props){
  const Text = styled.span`
    display: inline-block;
    margin-bottom: 10px;
    padding: 6px 15px;
  `;
  return (
    <Text className={props.highlight}>{props.text}</Text>
  );
}
