import { notificationService } from '@/src/services/api';
import { useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


interface Notification {
  _id: string;
  title: string;
  message: string;
  isRead: boolean;
  type: string;
  relatedId?: string;
  createdAt?: string;
}

const NotificationsScreen = ({  }) => {
    const navigation=useNavigation()
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    setLoading(true);
    const data = await notificationService.getAll('all');
    setNotifications(data);
    setLoading(false);
  };

  const handlePress = async (item: Notification) => {
    // 1. If unread, mark it as read on backend
    if (!item.isRead) {
      await notificationService.markAsRead(item._id);
      // Update UI locally to reflect change immediately

      setNotifications(prev => 
        prev.map(n => n._id === item._id ? { ...n, isRead: true } : n)
      );
    }

    // 2. Navigation Logic based on type
    // If the notification is about a swap, go to that swap detail
    if (item.type === 'SWAP_UPDATE' && item.relatedId) {
       //navigation.navigate('swapRequestDetails' as never, { requestId: item.relatedId } as never);
    }
  };

  const renderItem = ({ item }: { item: Notification }) => (
    <TouchableOpacity 
      style={[styles.item, !item.isRead && styles.unreadItem]} 
      onPress={() => handlePress(item)}
    >
      <View style={styles.textContainer}>
        <Text style={[styles.title, !item.isRead && styles.unreadText]}>
          {item.title || 'Notification'}
        </Text>
        <Text style={styles.message}>{item.message}</Text>
        <Text style={styles.date}>{item.createdAt?.split('T')[0]}</Text>
      </View>
      {!item.isRead && <View style={styles.dot} />}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={loadNotifications} />}
        ListEmptyComponent={<Text style={styles.empty}>No notifications yet.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  item: { flexDirection: 'row', padding: 15, borderBottomWidth: 1, borderBottomColor: '#eee', alignItems: 'center' },
  unreadItem: { backgroundColor: '#F0F8FF' }, // Light Blue for unread
  textContainer: { flex: 1 },
  title: { fontSize: 16, marginBottom: 4, color: '#444' },
  unreadText: { fontWeight: 'bold', color: '#000' },
  message: { fontSize: 14, color: '#666' },
  date: { fontSize: 12, color: '#999', marginTop: 4 },
  dot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#007AFF', marginLeft: 10 },
  empty: { textAlign: 'center', marginTop: 50, color: '#999' }
});

export default NotificationsScreen;