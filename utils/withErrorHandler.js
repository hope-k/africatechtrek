import { NextResponse } from "next/server";

function withErrorHandler(fn) {
    Promise.resolve(fn).catch((error) => {
        return NextResponse.error({
            status: error.statusCode || 500,
            message: error.message,
        });
    });

}

export default withErrorHandler;