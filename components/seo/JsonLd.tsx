/**
 * Renders one or more JSON-LD structured-data blocks. Server-component safe —
 * Next.js allows <script> in the body and will not hydrate this.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const blocks = Array.isArray(data) ? data : [data]
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Structured data is trusted, build-time content — safe to inline.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  )
}
