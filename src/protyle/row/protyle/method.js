import { graphvizRender } from "./markdown/graphvizRender";
import { highlightRender } from "./markdown/highlightRender";
import { mathRender } from "./markdown/mathRender";
import { mermaidRender } from "./markdown/mermaidRender";
import { flowchartRender } from "./markdown/flowchartRender";
import { chartRender } from "./markdown/chartRender";
import { abcRender } from "./markdown/abcRender";
import { mindmapRender } from "./markdown/mindmapRender";
import { mediaRender } from "./markdown/mediaRender";
import { plantumlRender } from "./markdown/plantumlRender";
import "../assets/scss/export.scss";
class Protyle {
}
/** 对 graphviz 进行渲染 */
Protyle.graphvizRender = graphvizRender;
/** 为 element 中的代码块进行高亮渲染 */
Protyle.highlightRender = highlightRender;
/** 对数学公式进行渲染 */
Protyle.mathRender = mathRender;
/** 流程图/时序图/甘特图渲染 */
Protyle.mermaidRender = mermaidRender;
/** flowchart.js 渲染 */
Protyle.flowchartRender = flowchartRender;
/** 图表渲染 */
Protyle.chartRender = chartRender;
/** 五线谱渲染 */
Protyle.abcRender = abcRender;
/** 脑图渲染 */
Protyle.mindmapRender = mindmapRender;
/** UML 渲染 */
Protyle.plantumlRender = plantumlRender;
/** 为[特定链接](https://github.com/Vanessa219/vditor/issues/7)分别渲染为视频、音频、嵌入的 iframe */
Protyle.mediaRender = mediaRender;
export default Protyle;
