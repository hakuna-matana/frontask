export interface AjaxParams {
  url: string,
  method?: "GET" | "POST" | "PUT" | "DELETE",
  contentType?: "FORM" | "JSON"
}

export interface AjaxResponse {
  data?: any,
  status?: number,
  error?: string,
}

export async function ajax(params:AjaxParams):Promise<AjaxResponse> {
  let result:AjaxResponse = {};
  let url = params.url;
  let opts:any = {
    url: params.url,
    method: params.method || "GET"
  }

  switch (params.contentType) {
    case "FORM":
      opts.contentType = "application/x-www-form-urlencoded; charset=UTF-8";
      break;
    case "JSON":
    default:
      opts.contentType = "application/json; charset=UTF-8";
      break;
  }

  // get response
  let res;
  try {
    res = await fetch(url, opts);
    result.status = res.status;
  } catch (e) {
    return {
      status: 400,
      error: e.message,
    };
  }

  // get json / text
  if (String(res.headers.get("Content-Type")).match("application/json")) {
    try {
      result.data = await res.json();
    } catch (e) {
      result.error = e.message;
      console.error(e.stack);
    }
  } else {
    try {
      result.data = await res.text();
    } catch (e) {
      result.error = e.message;
      console.error(e.stack);
    }
  }

  // handle errors
  if (!res.ok) {
    return {
      status: res.status,
      error: result.error || result.data && result.data.message ||  res.statusText,
    }
  }

  if (params.contentType === "JSON" && result.data === void 0) {
    result.data = {};
  }

  return result;
}