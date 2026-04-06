export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          name: string
          role: 'admin' | 'user'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          name: string
          role?: 'admin' | 'user'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          role?: 'admin' | 'user'
          updated_at?: string
        }
      }
      weight_classes: {
        Row: {
          id: string
          name: string
          max_weight_kg: number
          gender: 'male' | 'female' | 'mixed'
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          max_weight_kg: number
          gender?: 'male' | 'female' | 'mixed'
          created_at?: string
        }
        Update: {
          name?: string
          max_weight_kg?: number
          gender?: 'male' | 'female' | 'mixed'
        }
      }
      gyms: {
        Row: {
          id: string
          name: string
          location: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          location?: string | null
          created_at?: string
        }
        Update: {
          name?: string
          location?: string | null
        }
      }
      athletes: {
        Row: {
          id: string
          name: string
          birth_date: string | null
          gender: 'male' | 'female'
          weight_class_id: string | null
          gym_id: string | null
          record_win: number
          record_loss: number
          record_draw: number
          record_nc: number
          photo_url: string | null
          nationality: string | null
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          birth_date?: string | null
          gender?: 'male' | 'female'
          weight_class_id?: string | null
          gym_id?: string | null
          record_win?: number
          record_loss?: number
          record_draw?: number
          record_nc?: number
          photo_url?: string | null
          nationality?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          name?: string
          birth_date?: string | null
          gender?: 'male' | 'female'
          weight_class_id?: string | null
          gym_id?: string | null
          record_win?: number
          record_loss?: number
          record_draw?: number
          record_nc?: number
          photo_url?: string | null
          nationality?: string | null
          notes?: string | null
          updated_at?: string
        }
      }
      events: {
        Row: {
          id: string
          name: string
          event_date: string
          venue: string | null
          description: string | null
          poster_url: string | null
          status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled'
          created_by: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          event_date: string
          venue?: string | null
          description?: string | null
          poster_url?: string | null
          status?: 'upcoming' | 'ongoing' | 'completed' | 'cancelled'
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          name?: string
          event_date?: string
          venue?: string | null
          description?: string | null
          poster_url?: string | null
          status?: 'upcoming' | 'ongoing' | 'completed' | 'cancelled'
          updated_at?: string
        }
      }
      bouts: {
        Row: {
          id: string
          event_id: string
          athlete1_id: string
          athlete2_id: string
          weight_class_id: string | null
          bout_order: number
          scheduled_rounds: number
          status: 'scheduled' | 'completed' | 'cancelled' | 'no_contest'
          is_title_bout: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          event_id: string
          athlete1_id: string
          athlete2_id: string
          weight_class_id?: string | null
          bout_order?: number
          scheduled_rounds?: number
          status?: 'scheduled' | 'completed' | 'cancelled' | 'no_contest'
          is_title_bout?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          bout_order?: number
          scheduled_rounds?: number
          status?: 'scheduled' | 'completed' | 'cancelled' | 'no_contest'
          is_title_bout?: boolean
          updated_at?: string
        }
      }
      bout_results: {
        Row: {
          id: string
          bout_id: string
          winner_id: string | null
          method: 'KO' | 'TKO' | 'SUB' | 'DEC_UNI' | 'DEC_SPL' | 'DEC_MAJ' | 'NC' | 'DQ' | 'DRAW'
          round: number | null
          time_mm: number | null
          time_ss: number | null
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          bout_id: string
          winner_id?: string | null
          method: 'KO' | 'TKO' | 'SUB' | 'DEC_UNI' | 'DEC_SPL' | 'DEC_MAJ' | 'NC' | 'DQ' | 'DRAW'
          round?: number | null
          time_mm?: number | null
          time_ss?: number | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          winner_id?: string | null
          method?: 'KO' | 'TKO' | 'SUB' | 'DEC_UNI' | 'DEC_SPL' | 'DEC_MAJ' | 'NC' | 'DQ' | 'DRAW'
          round?: number | null
          time_mm?: number | null
          time_ss?: number | null
          notes?: string | null
          updated_at?: string
        }
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
  }
}

// 편의용 타입 단축어
export type Profile = Database['public']['Tables']['profiles']['Row']
export type WeightClass = Database['public']['Tables']['weight_classes']['Row']
export type Gym = Database['public']['Tables']['gyms']['Row']
export type Athlete = Database['public']['Tables']['athletes']['Row']
export type Event = Database['public']['Tables']['events']['Row']
export type Bout = Database['public']['Tables']['bouts']['Row']
export type BoutResult = Database['public']['Tables']['bout_results']['Row']

export type BoutMethod = BoutResult['method']
export type EventStatus = Event['status']
export type BoutStatus = Bout['status']
