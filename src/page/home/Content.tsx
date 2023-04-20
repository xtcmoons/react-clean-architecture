

type ContentProps = {
  title: string;
  createAt: string;
}

function Content(props: ContentProps) {
  const {
    title,
    createAt,
  } = props
  return (
    <div>
    <div>
      {title}
    </div>
    <div>
      {createAt}
    </div>
    </div>
  )
}

export default Content;