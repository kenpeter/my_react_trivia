// export
// default
// opts
export default opts => {
  // return
  // new
  // promise
  // resolve
  // reject
  return new Promise((resolve, reject) => {
    // let
    // xhr
    // new
    // xml http request
    let xhr = new XMLHttpRequest();
    
    // opts itself
    // xhr open
    // opts method or get
    // opts.url
    xhr.open(opts.method || "GET", opts.url);
      // xhr onload
      // =
      // () => {}
      xhr.onload = () => {
        // if
        // xhr.status
        // >= 200
        //< 300
        if (xhr.status >= 200 && xhr.status < 300) {
          // resolve, promise
          // xhr
          // response
          resolve(xhr.response);
        } else {
          // reject
          reject({
            // status
            // this.status
            status: this.status,
            // status text
            // xhr status text
            statusText: xhr.statusText
          });
        }
      };
      
      // xhr
      // on error
      // = () => {}
      xhr.onerror = () => {
        // reject
        reject({
          // status
          status: this.status,
          // status text
          statusText: xhr.statusText
        });
      };

      // opts
      // headers      
      if (opts.headers) {
        // obj key
        // opt headers
        // for each
        // key
        Object.keys(opts.headers).forEach(key => {
          // xhr
          // set request header
          xhr.setRequestHeader(key, opts.headers[key]);
        });
      }

      xhr.send(opts.data);
    });
}

