// @flow
import * as React from 'react';
import styled from 'styled-components';
import Tippy from '@tippy.js/react';

type Props = {
  tooltip: React.Node,
  placement?: 'top' | 'bottom' | 'left' | 'right',
  children: React.Node,
  delay?: number,
  className?: string,
  block?: boolean,
};

class Tooltip extends React.Component<Props> {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const {
      tooltip,
      delay = 50,
      children,
      block,
      className,
      ...rest
    } = this.props;

    return (
      <StyledTippy
        arrow
        arrowType="round"
        animation="shift-away"
        content={tooltip}
        delay={delay}
        duration={[200, 150]}
        inertia
        {...rest}
      >
        <TooltipCentered as={block ? 'div' : 'span'} className={className}>
          {children}
        </TooltipCentered>
      </StyledTippy>
    );
  }
}

const TooltipCentered = styled.div`
  text-align: center;
`;

const StyledTippy = styled(Tippy)`
  font-size: 13px;
  background-color: ${props => props.theme.tooltipBackground};
  color: ${props => props.theme.tooltipText};

  svg {
    fill: ${props => props.theme.tooltipBackground};
  }
`;

export default Tooltip;
