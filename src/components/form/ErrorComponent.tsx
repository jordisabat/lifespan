const ErrorComponent = () => (
  <div className="mb-6 md:flex md:w-[600px]">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <div className="text-red-500">
        Please correct the following errors:
        <div>* All fields are required.</div>
        <div>* Email should be valid.</div>
        <div>* Age should be between 18 and 100.</div>
        <div>* Sleep hours should be between 0 and 24.</div>
      </div>
    </div>
  </div>
);

export default ErrorComponent;
