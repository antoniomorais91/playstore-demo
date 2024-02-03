export default function OffersItem({
  id,
  src,
  alt,
  caption,
  discount,
  price,
  oldPrice,
}) {
  return (
    <article key={id} className="offersitens">
      <figure>
        <img src={src} alt={alt} className="img" width={240} height={240} />
        <figcaption>{caption}</figcaption>
      </figure>
      <div className="tag">{discount}</div>
      <div className="price">
        <span>R$ {price}</span>
        <span className="oldPrice">R$ {oldPrice}</span>
      </div>
    </article>
  );
}
