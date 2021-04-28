import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName =
  | 'zoom-in-top'
  | 'zoom-in-left'
  | 'zoom-in-right'
  | 'zoom-in-buttom'

type TransitionProps = CSSTransitionProps & {
  //继承CSSTransition的属性
  animation?: AnimationName //新增加一个字面量属性值
}

const Transition: React.FC<TransitionProps> = (props) => {
  const { children, classNames, animation, ...restprops } = props
  return (
    <CSSTransition
      classNames={classNames ? classNames : animation}
      {...restprops}
    >
      {children}
    </CSSTransition>
  )
}

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
}

export default Transition
