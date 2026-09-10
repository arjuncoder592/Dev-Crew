import { prisma } from "@/lib/prisma"; import { getSession } from "@/lib/auth";
export async function currentStudent(){const session=await getSession(); if(!session || session.role!=="STUDENT") return null; return prisma.studentProfile.findUnique({where:{userId:session.id},include:{user:true,skills:{include:{skill:true}},evidence:true,simulationSubmissions:true}})}
