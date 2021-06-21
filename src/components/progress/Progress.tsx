import React, { FC, HTMLProps, useState, useEffect } from 'react';
import classNames from 'classnames';

export type ThemeProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'error'
  | 'light'
  | 'dark';

export type colorArray = {
  color: string;
  percent?: number;
}[];
export type colorProps = string | colorArray | ((percent: number) => string);
export interface ProgressProps {
  /**
   * 进度条百分比
   */
  percent: number;
  /**
   * 进度条高度
   */
  strokeHidth?: number;
  /**
   * 是否展示文字
   */
  showText?: boolean;
  /**
   * 进度条主题
   */
  theme?: ThemeProps;
  /**
   * 进度条颜色，可以是一个颜色字符串，一个数组，也可以是一个函数
   */
  color?: colorProps;
  /**
   * 文字是否外显，默认内显
   */
  textOutside?: boolean;
}

const Progress: FC<ProgressProps & HTMLProps<HTMLElement>> = props => {
  const {
    percent,
    strokeHidth,
    showText = true,
    theme = 'primary',
    color,
    textOutside,
    style,
  } = props;
  const [bgColor, setBgColor] = useState<string>();

  useEffect(() => {
    progressColor();
  }, [percent, color, bgColor]);

  // 获取数组颜色
  const getColorArray = () => {
    const colorArray = color as colorArray;
    // 未定义percent
    const span = 100 / colorArray.length;
    // 遍历颜色数组
    return colorArray.map((seriesColor, index) => {
      if (typeof seriesColor === 'string') {
        return {
          color: seriesColor,
          percent: (index + 1) * span,
        };
      }
      return seriesColor;
    });
  };

  const getLevelColor = () => {
    // 根据percent进行排序
    const colorArray = getColorArray().sort(
      (a, b) => (a.percent as number) - (b.percent as number),
    );

    for (let i = 0; i < colorArray.length; i++) {
      if ((colorArray[i].percent as number) > percent) {
        return colorArray[i].color;
      }
    }
    return colorArray[colorArray.length - 1].color;
  };

  // 处理自定义color
  const progressColor = (): void => {
    if (!color) return;
    if (typeof color === 'string') {
      setBgColor(color);
    }
    if (Array.isArray(color)) {
      setBgColor(getLevelColor());
    }
    if (typeof color === 'function') {
      const colorFun = color as Function;
      setBgColor(colorFun(percent));
    }
  };
  return (
    <div className="viki-progress-bar" style={style ?? {}}>
      <div
        className="viki-progress-bar-outer"
        style={{ height: strokeHidth || (textOutside ? '8px' : '15px') }}
      >
        <div
          className={`viki-progress-bar-inner progress-color-${theme}`}
          style={{ width: `${percent}%`, backgroundColor: bgColor! }}
        >
          {!textOutside && (
            <span className="inner-text">{showText && `${percent}%`}</span>
          )}
        </div>
      </div>
      {textOutside && (
        <span className="out-text">{showText && `${percent}%`}</span>
      )}
    </div>
  );
};

export default Progress;
