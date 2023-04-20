
import style from './style.module.scss';

type AuthorProps = {
  avatarUrl: string;
}

function Author(props: AuthorProps) {
  const {
    avatarUrl,
  } = props;
  return (
    <div>
      <img className={style.author} src={avatarUrl}/>
    </div>
  )
}

export default Author;