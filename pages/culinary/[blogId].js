import { DateTime } from 'luxon';

export default function Article({ article, author }) {
  const time = DateTime.fromISO(article["post-date"]);
  const waktu = time.setLocale('en').toLocaleString(DateTime.DATE_FULL);
  console.log(author)
  return (
    <article className="px-10 sm:px-20 md:px-28 lg:px-44 scroll-smooth py-10 text-white grid grid-col-1 place-items-center">
      <p className="text-white/60 text-sm leading-none mb-2.5">{article.category} &bull; {waktu}</p>
      <h1 className='text-2xl leading-9 text-center mb-8'>{article.title}</h1>
      <div className="flex flex-row items-center gap-4 mb-7">
        <img className="w-12 rounded-full" src={author.image} alt="" />
        <div>
          <h3 className="capitalize text-base leading-7">{author.name}</h3>
          <p className="capitalize text-white/60 text-sm leading-7">{author.title}</p>
        </div>
      </div>
      <img className='w-full rounded mb-16' src={article.image} />
      <div className='text-base leading-7 lg:px-24 flex flex-col gap-7' dangerouslySetInnerHTML={{ __html: article.body }}></div>
    </article>
  )
}

export async function getServerSideProps(context) {
  const { params } = context;
  const responseArticle = await fetch(`http://localhost:3001/posts?category=culinary&id-post=${params.blogId}`);
  const dataArticle = await responseArticle.json();
  try {
    const responseAuthor = await fetch(`http://localhost:3001/authors?id=${dataArticle[0]["id-author"]}`);
    const dataAuthor = await responseAuthor.json();
  } catch (e) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    }
  }
  const responseAuthor = await fetch(`http://localhost:3001/authors?id=${dataArticle[0]["id-author"]}`);
  const dataAuthor = await responseAuthor.json();
  if (!dataArticle) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    }
  }
  return {
    props: {
      article: dataArticle[0],
      author: dataAuthor[0]
    }
  }
}