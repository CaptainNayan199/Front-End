function TodoItem2() {
  let todoName = "Buy Fish from Birtabazar";
  let targetDate = "12/31/2025";
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-5">{todoName}</div>
        <div class="col-4">{targetDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
