import styled from 'styled-components';

export default function HighlightText(props){
  const Text = styled.span`
    display: inline-block;
    padding: 4px 15px 12px;

    :not(:last-of-type){
      margin-bottom: 10px;
    }
  `;
  return (
    <Text className={props.highlight}>{props.text}</Text>
  );
}
