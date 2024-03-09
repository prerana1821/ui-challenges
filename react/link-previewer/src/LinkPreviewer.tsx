import { ReactElement, useEffect, useState } from "react";
import { encode } from "qss";

export default function LinkPreviewer({
  url,
  children,
}: {
  url: string;
  children: ReactElement | Array<ReactElement>;
}) {
  const [isMounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const params = encode({
    url,
    screenshot: true,
    meta: false,
    embed: "screenshot.url",
    colorScheme: "dark",
    "viewport.isMobile": true,
    "viewport.deviceScaleFactor": 1,
    "viewport.width": 200 * 3,
    "viewport.height": 125 * 3,
  });

  const src = `https://api.microlink.io/?${params}`;

  return (
    <div className='preview-url'>
      {isMounted && show && <img src={src} alt={url} className='preview-img' />}
      <a
        href={url}
        target='_blank'
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        rel='noreferrer'
      >
        {children}
      </a>
    </div>
  );
}
