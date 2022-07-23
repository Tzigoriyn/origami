import style from "./Post.module.css"

const Post = ({
    content,
    author
}) => {
    return (
        <div className={style.Post}>
            <img src="/blue-origami-bird.png" alt="blue origami" />
            <p className={style.description}>
                {content}
            </p>
            <div>
                <span>
                    <small>Author:</small>
                    {author}
                </span>
            </div>
        </div>

    );
}

export default Post;