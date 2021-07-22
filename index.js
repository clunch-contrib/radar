/**
 * 雷达图
*/


var initConfig = function (attr, that) {

    if (attr.cx == null) attr.cx = that._width * 0.5;
    if (attr.cy == null) attr.cy = that._height * 0.5;
    if (attr.radius == null) attr.radius = that._min * 0.3;

};

export default ["number", "json", "$rotate", "$getLoopColors", function ($number, $json, $rotate, $getLoopColors) {
    return {
        attrs: {
            // 圆心和半径
            cx: $number(null)(true),
            cy: $number(null)(true),
            radius: $number(null)(true),

            // 指示器
            indicator: $json(),

            // 数据
            data: $json()

        },
        region: {
            default: function (render, attr) {
                initConfig(attr, this);

                var i, j, dot, painter, deg = Math.PI * 2 / attr.indicator.length;

                for (j = 0; j < attr.data.length; j++) {
                    painter = render(j, attr.data[j]).beginPath();
                    for (i = 0; i < attr.indicator.length; i++) {
                        dot = $rotate(attr.cx, attr.cy, deg * i, attr.cx, attr.cy - attr.data[j].value[i] / attr.indicator[i].max * attr.radius);
                        painter.lineTo(dot[0], dot[1]);
                    }
                    painter.closePath().full();
                }

            }
        },
        link: function (painter, attr) {
            initConfig(attr, this);

            var i, j, dot, textAlign;

            var deg = Math.PI * 2 / attr.indicator.length;
            var dist = attr.radius * 0.2;

            painter.config({
                'strokeStyle': "#eaeef5"
            });

            // 绘制背景
            for (j = 5; j > 0; j--) {// 外到内

                painter.config('fillStyle', j % 2 == 0 ? "white" : "#f5f7fb").beginPath();

                for (i = 0; i < attr.indicator.length; i++) {// 旋转
                    dot = $rotate(attr.cx, attr.cy, deg * i, attr.cx, attr.cy - dist * j);
                    painter.lineTo(dot[0], dot[1]);
                }
                painter.closePath().full();

            }

            painter.config({
                fillStyle: "#000000",
                "font-size": 10
            });

            // 绘制背景线条
            for (i = 0; i < attr.indicator.length; i++) {
                dot = $rotate(attr.cx, attr.cy, deg * i, attr.cx, attr.cy - attr.radius);
                painter.beginPath().moveTo(attr.cx, attr.cy).lineTo(dot[0], dot[1]).stroke();

                if (i == 0 || i == attr.indicator.length * 0.5) {
                    textAlign = 'center';
                } else if (i > attr.indicator.length * 0.5) {
                    textAlign = 'right';
                } else {
                    textAlign = 'left';
                }

                // 文字
                dot = $rotate(attr.cx, attr.cy, deg * i, attr.cx, attr.cy - attr.radius - 10);
                painter.config({
                    textAlign: textAlign
                }).fillText(attr.indicator[i].name, dot[0], dot[1]);
            }

            // 绘制数据
            var colors = $getLoopColors(attr.data.length);
            var colorsAlpha = $getLoopColors(attr.data.length, 0.7);
            for (j = 0; j < attr.data.length; j++) {
                painter.config({
                    strokeStyle: colors[j],
                    fillStyle: colorsAlpha[j]
                }).beginPath();
                for (i = 0; i < attr.indicator.length; i++) {
                    dot = $rotate(attr.cx, attr.cy, deg * i, attr.cx, attr.cy - attr.data[j].value[i] / attr.indicator[i].max * attr.radius);
                    painter.lineTo(dot[0], dot[1]);
                }
                painter.closePath().full();
            }

        }
    };
}];
