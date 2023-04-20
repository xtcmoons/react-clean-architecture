
import Author from "./Author"
import Content from "./Content"
import style from './style.module.scss';

type Cellprops = {
  avatarUrl: string;
  title: string;
  createAt: string;
}

function Cell(props: Cellprops) {
  const {
    title,
    avatarUrl,
    createAt,
  } = props
  return (
    <div
    className={style.container}
    >
    <Author 
    avatarUrl={avatarUrl}
    />
    <Content
    title={title}
    createAt={createAt}
    />
    </div>
  )
}

export default Cell;