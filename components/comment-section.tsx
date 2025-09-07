"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Reply, Heart, MoreHorizontal } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

interface Comment {
  id: string
  author: string
  content: string
  date: string
  likes: number
  replies: Comment[]
  isLiked?: boolean
}

interface CommentSectionProps {
  postId: string
}

// Mock comments data
const mockComments: Comment[] = [
  {
    id: "1",
    author: "Sarah Johnson",
    content: "This is such an inspiring story! It's amazing to see the impact volunteers can have on communities. I'd love to get involved in similar projects.",
    date: "2024-01-16",
    likes: 12,
    isLiked: false,
    replies: [
      {
        id: "1-1",
        author: "Mike Chen",
        content: "I completely agree! The transformation in these communities is remarkable. Have you checked out their volunteer application process?",
        date: "2024-01-16",
        likes: 5,
        isLiked: true,
        replies: []
      },
      {
        id: "1-2",
        author: "Emma Wilson",
        content: "The photos really show the before and after difference. It's heartwarming to see the children's faces in the new school.",
        date: "2024-01-17",
        likes: 8,
        isLiked: false,
        replies: []
      }
    ]
  },
  {
    id: "2",
    author: "David Rodriguez",
    content: "As someone who has worked in education for 20 years, I can attest to the importance of proper infrastructure. This project addresses a critical need.",
    date: "2024-01-15",
    likes: 18,
    isLiked: true,
    replies: [
      {
        id: "2-1",
        author: "Lisa Park",
        content: "Thank you for sharing your perspective! It's valuable to hear from experienced educators about the impact of such initiatives.",
        date: "2024-01-15",
        likes: 3,
        isLiked: false,
        replies: []
      }
    ]
  },
  {
    id: "3",
    author: "Ahmed Hassan",
    content: "This reminds me of similar projects in my home country. Education truly is the foundation for building stronger communities. Kudos to all the volunteers!",
    date: "2024-01-14",
    likes: 15,
    isLiked: false,
    replies: []
  }
]

export function CommentSection({ postId }: CommentSectionProps) {
  const { t } = useLanguage()
  const [comments, setComments] = useState<Comment[]>(mockComments)
  const [newComment, setNewComment] = useState("")
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyContent, setReplyContent] = useState("")

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const comment: Comment = {
      id: Date.now().toString(),
      author: "Anonymous User",
      content: newComment,
      date: new Date().toISOString().split('T')[0],
      likes: 0,
      isLiked: false,
      replies: []
    }

    setComments([comment, ...comments])
    setNewComment("")
  }

  const handleSubmitReply = (e: React.FormEvent, parentId: string) => {
    e.preventDefault()
    if (!replyContent.trim()) return

    const reply: Comment = {
      id: `${parentId}-${Date.now()}`,
      author: "Anonymous User",
      content: replyContent,
      date: new Date().toISOString().split('T')[0],
      likes: 0,
      isLiked: false,
      replies: []
    }

    setComments(comments.map(comment => {
      if (comment.id === parentId) {
        return { ...comment, replies: [...comment.replies, reply] }
      }
      return comment
    }))

    setReplyContent("")
    setReplyingTo(null)
  }

  const toggleLike = (commentId: string, isReply: boolean = false, parentId?: string) => {
    if (isReply && parentId) {
      setComments(comments.map(comment => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: comment.replies.map(reply => {
              if (reply.id === commentId) {
                return {
                  ...reply,
                  likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1,
                  isLiked: !reply.isLiked
                }
              }
              return reply
            })
          }
        }
        return comment
      }))
    } else {
      setComments(comments.map(comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
            isLiked: !comment.isLiked
          }
        }
        return comment
      }))
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  const CommentItem = ({ comment, isReply = false, parentId }: { comment: Comment, isReply?: boolean, parentId?: string }) => (
    <Card className={`${isReply ? 'ml-8 mt-4' : 'mb-4'}`}>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={`/placeholder-user.jpg`} />
            <AvatarFallback>
              {comment.author.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-sm">{comment.author}</span>
              <span className="text-xs text-gray-500">{formatDate(comment.date)}</span>
            </div>
            
            <p className="text-sm text-gray-700 mb-3">{comment.content}</p>
            
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2 text-xs"
                onClick={() => toggleLike(comment.id, isReply, parentId)}
              >
                <Heart className={`h-3 w-3 mr-1 ${comment.isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                {comment.likes}
              </Button>
              
              {!isReply && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-2 text-xs"
                  onClick={() => setReplyingTo(comment.id)}
                >
                  <Reply className="h-3 w-3 mr-1" />
                  Reply
                </Button>
              )}
              
              <Button variant="ghost" size="sm" className="h-8 px-2">
                <MoreHorizontal className="h-3 w-3" />
              </Button>
            </div>

            {/* Reply Form */}
            {replyingTo === comment.id && !isReply && (
              <form onSubmit={(e) => handleSubmitReply(e, comment.id)} className="mt-4">
                <Textarea
                  placeholder="Write a reply..."
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  className="mb-2"
                  rows={2}
                />
                <div className="flex gap-2">
                  <Button type="submit" size="sm">Reply</Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      setReplyingTo(null)
                      setReplyContent("")
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            )}

            {/* Nested Replies */}
            {comment.replies.length > 0 && (
              <div className="mt-4">
                {comment.replies.map((reply) => (
                  <CommentItem 
                    key={reply.id} 
                    comment={reply} 
                    isReply={true} 
                    parentId={comment.id}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Comments ({comments.length})</h2>
        <p className="text-gray-600">Share your thoughts and join the conversation</p>
      </div>

      {/* Comment Form */}
      <Card className="mb-8">
        <CardHeader>
          <h3 className="text-lg font-semibold">Leave a Comment</h3>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitComment}>
            <Textarea
              placeholder="What are your thoughts on this article?"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="mb-4"
              rows={4}
            />
            <Button type="submit" disabled={!newComment.trim()}>
              Post Comment
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>

      {comments.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-gray-500">No comments yet. Be the first to share your thoughts!</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
