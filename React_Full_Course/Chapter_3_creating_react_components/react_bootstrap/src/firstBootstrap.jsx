function Example() {
  return (
    <div>
      <h1>We are using Botstrap in React</h1>
      <button type="button" class="btn btn-primary me-3">
        Primary
      </button>
      <button type="button" class="btn btn-secondary me-3">
        Secondary
      </button>
      <button type="button" class="btn btn-success me-3">
        Success
      </button>
      <button type="button" class="btn btn-danger me-3">
        Danger
      </button>
      <button type="button" class="btn btn-warning me-3">
        Warning
      </button>
      <button type="button" class="btn btn-info me-3">
        Info
      </button>
      <button type="button" class="btn btn-light me-3">
        Light
      </button>
      <button type="button" class="btn btn-dark me-3">
        Dark
      </button>
      <button type="button" class="btn btn-link me-3">
        Link
      </button>
      <br></br>
      <br></br>
      <button type="button" class="btn btn-primary position-relative">
        Inbox
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          6<span class="visually-hidden">Add to Cart</span>
        </span>
      </button>
    </div>
  );
}

export default Example;
