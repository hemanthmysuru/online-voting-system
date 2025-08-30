export interface ICandidate {
    id: number;
    name: string;
    party: string;
    sign: string;
}

export interface ICurrentElection {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    candidates: ICandidate[];
    votingOpen?: boolean; // Optional - computed later
}

export interface IUpcomingElection {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    description?: string; // Optional for now
}
