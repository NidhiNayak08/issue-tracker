import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const createIssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
}); //define shaoe of obj and body of request

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createIssueSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 }); //if not valid
  //if valid we save in db, for that we need Prisma client
  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });
  //return response to client with newissue
  return NextResponse.json(newIssue, { status: 201 });
}
