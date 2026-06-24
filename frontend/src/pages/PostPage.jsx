import { useParams, Link } from 'react-router-dom'
import { posts } from '../data/posts'

export default function PostPage() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-8 py-24 text-center">
        <p className="font-heading text-2xl text-ink">Post not found.</p>
        <Link to="/" className="font-ui text-sm text-gold mt-4 inline-block">
          ← back to home
        </Link>
      </div>
    )
  }

  return (
    <article className="max-w-2xl mx-auto px-8 py-16">

      {/* Back link */}
      <Link to="/" className="font-ui text-xs tracking-widest text-gold uppercase hover:text-brown transition-colors duration-300">
        ← all writings
      </Link>

      {/* Date */}
      <p className="font-ui text-xs tracking-widest text-gold uppercase mt-12 mb-4">
        {post.date}
      </p>

      {/* Title */}
      <h1 className="font-heading text-4xl text-ink leading-tight mb-4">
        {post.title}
      </h1>

      {/* Subtitle */}
      <p className="font-body text-inklight text-lg leading-relaxed mb-12">
        {post.subtitle}
      </p>

      {/* Divider */}
      <div className="flex items-center gap-4 text-gold mb-12">
        <div className="h-px w-16 bg-gold opacity-40"></div>
        <span>✦</span>
        <div className="h-px w-16 bg-gold opacity-40"></div>
      </div>

      {/* Post content */}
      <div className="font-body text-ink leading-relaxed text-lg">
        {Array.isArray(post.content) ? (
          <GhazalContent content={post.content} />
        ) : (
          <p>{post.content}</p>
        )}
      </div>

    </article>
  )
}

function GhazalContent({ content }) {
  return (
    <div className="space-y-16">
      {content.map((ghazal, index) => (
        <div key={index}>

          {/* Shayar name */}
          <p className="font-ui text-xs tracking-widest text-gold uppercase mb-6">
            {ghazal.isDialogue ? '✦ संवाद' : `✦ ${ghazal.shayar}`}
          </p>

          {/* Dialogue label */}
          {ghazal.isDialogue && (
            <p className="font-heading text-xl text-ink mb-6">
              {ghazal.shayar}
            </p>
          )}

          {/* Verses */}
          <div className="space-y-1" dir="auto">
            {renderVerses(ghazal.lines, ghazal.highlighted || [], ghazal.isDialogue)}
          </div>

          {/* Divider between ghazals */}
          {index < content.length - 1 && (
            <div className="flex items-center gap-4 text-gold mt-16">
              <div className="h-px flex-1 bg-gold opacity-20"></div>
              <span className="text-sm opacity-40">✦</span>
              <div className="h-px flex-1 bg-gold opacity-20"></div>
            </div>
          )}

        </div>
      ))}
    </div>
  )
}

function renderVerses(lines, highlighted, isDialogue) {
  const result = []
  let sherId = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Empty line = stanza break
    if (line === '') {
      result.push(<div key={`gap-${i}`} className="h-4" />)
      continue
    }

    const nextLine = lines[i + 1]
    const isHighlighted =
      highlighted.includes(line) || highlighted.includes(nextLine)

    // Pair lines into a sher
    if (nextLine && nextLine !== '') {
      if (isHighlighted) {
        result.push(
          <div
            key={`sher-${sherId++}`}
            className="border-l-4 border-brown bg-paperdark pl-4 py-3 rounded-r-md"
          >
            <p className="text-brown leading-relaxed">
              {isDialogue ? <em>{line}</em> : line}
            </p>
            <p className="text-brown leading-relaxed">
              {isDialogue ? <em>{nextLine}</em> : nextLine}
            </p>
          </div>
        )
      } else {
        result.push(
          <div key={`sher-${sherId++}`}>
            <p className="leading-relaxed">
              {isDialogue ? <em>{line}</em> : line}
            </p>
            <p className="leading-relaxed">
              {isDialogue ? <em>{nextLine}</em> : nextLine}
            </p>
          </div>
        )
      }
      i++ // skip next line since we consumed it
    } else {
      // Single line (shouldn't happen often but safe fallback)
      result.push(
        <p key={`line-${i}`} className="leading-relaxed">
          {isDialogue ? <em>{line}</em> : line}
        </p>
      )
    }
  }

  return result
}