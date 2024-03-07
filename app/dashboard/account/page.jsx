import Image from "next/image";

export default function Account() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="max-w-sm mb-4">
        <Image
          src="/mic.avif" // Reference the image directly from the public folder
          alt="Microphone" // Provide a descriptive alt text for the image
          width={250} // Define the intrinsic width for the aspect ratio
          height={150} // Define the intrinsic height for the aspect ratio
          layout="responsive" // This will make the image responsive
        />
      </div>

      <details className="text-left mb-4">
        <summary className="mb-4">Image Rendering Questions</summary>
        <ul>
          <li className="mb-4">
            <strong>
              Does a simple img tag get rendered, or something else?
            </strong>
            <p>
              The Next.js Image component does not render a simple img tag. It
              renders a complex structure of HTML elements including span and
              img tags to support features like lazy loading, placeholders, and
              responsive images.
            </p>
          </li>
          <li className="mb-4">
            <strong>
              Is the primary image still in AVIF format, or something else?
            </strong>
            <p>
              The primary image format will be AVIF if the browser supports it.
              Next.js serves images using the best format supported by the users
              browser, which could include WebP, JPEG, or PNG if AVIF is not
              supported.
            </p>
          </li>
          <li className="mb-4">
            <strong>
              Are srcset and sizes attributes defined to reference other sizes
              of this image?
            </strong>
            <p>
              Yes, the Next.js Image component automatically generates srcset
              and sizes attributes for responsive images. This lets the browser
              select the most appropriate image size based on the devices screen
              size and resolution, providing a more efficient loading process.
            </p>
          </li>
          <li className="mb-4">
            <strong>Does the image leverage native lazy loading?</strong>
            <p>
              Yes, the Next.js Image component uses native lazy loading by
              default, meaning the browser will wait to load the image until its
              about to enter the viewport, which helps improve page performance.
            </p>
          </li>
        </ul>
      </details>
    </div>
  );
}
