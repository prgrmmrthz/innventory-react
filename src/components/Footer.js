import React from "react";

export default function MyFooter() {
  return (
    <div>
      <footer className="py-4 bg-light mt-auto">
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-between small">
            <div className="text-muted">Copyright &copy; Your Website 2021</div>
            <div>
              <button>Privacy Policy</button>
              &middot;
              <button>Terms &amp; Conditions</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
