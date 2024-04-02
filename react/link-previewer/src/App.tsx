import "./App.css";
import LinkPreviewer from "./LinkPreviewer";

export default function App() {
  return (
    <div>
      <div className='container'>
        <h1>Link Previewer</h1>
        <div className='text'>
          Checkout my{" "}
          <LinkPreviewer url='https://precodes.hashnode.dev/'>
            <span className='link'> Blog</span>
          </LinkPreviewer>{" "}
          Profile
        </div>
        <div className='text'>
          And my{" "}
          <LinkPreviewer url='https://github.com/prerana1821'>
            <span className='link'> GitHub</span>
          </LinkPreviewer>{" "}
          Profile
        </div>
        <div className='text'>
          And my{" "}
          <LinkPreviewer url='https://precodes.netlify.app/'>
            <span className='link'> Portfolio</span>
          </LinkPreviewer>{" "}
          website
        </div>
      </div>
    </div>
  );
}
