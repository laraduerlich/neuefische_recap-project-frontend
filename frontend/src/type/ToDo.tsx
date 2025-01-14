export type ToDo = {
    id: number;
    description: string;
    status: Status
}

export type Status = "OPEN" | "IN_PROGRESS" | "DONE"